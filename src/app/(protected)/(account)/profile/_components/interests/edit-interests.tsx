import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { SearchableSelect } from "components/select/searchable-select";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { interestValidationSchema } from "validations";
import { InferType } from "yup";
import { useInterests } from "hooks/interest";
import { useAccount, useUpdateUserInterests } from "hooks/account";

export const EditInterestsModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };

  const { mutate, isPending: isSubmitting } = useUpdateUserInterests(onSuccess);

  const { data: interests } = useInterests();
  const { data: user } = useAccount();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(interestValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof interestValidationSchema>
  > = (data) => mutate({ data });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-xs flex items-center justify-between bg-secondary-50 px-5 py-1 rounded-full"
      >
        <FaPlus /> <span>Add</span>
      </button>
      <Modal
        show={showModal}
        modalTitle="Education goal"
        onCloseCallback={() => setShowModal(false)}
      >
        <form onSubmit={handleSubmit(sendToServer)} className="mt-6">
          <SearchableSelect
            label="Select your interests"
            error={errors.interests}
            multi={true}
            onChange={(selectedOptions: { label: string; value: string }[]) => {
              setValue(
                "interests",
                selectedOptions?.map((item) => item.value)
              );
            }}
            options={
              interests
                ?.filter((interest) => interest?.role === user?.role)
                ?.map((interest) => ({
                  label: interest.name,
                  value: interest.id,
                })) || []
            }
          />

          <div className="pt-5 flex items-center justify-between">
            <Button
              type="submit"
              className="h-12 w-32"
              radius="rounded-full focus:rounded-full"
              variant="secondary"
              isLoading={isSubmitting}
            >
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
