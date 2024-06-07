import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Input } from "components/input";
import { Modal } from "components/modal";
import { useSaveSocialMediaHandles } from "hooks/account";
import { SocialMediaHandle } from "interfaces";
import { SOCIAL_MEDIAS } from "lib/enum";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { socialHandlesValidationSchema } from "validations";
import { InferType } from "yup";

export const UpdateSocialHandles = ({
  handles,
}: {
  handles: SocialMediaHandle[];
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSuccess = () => {
    setShowModal(false);
  };

  const { mutate, isPending: isSubmitting } =
    useSaveSocialMediaHandles(onSuccess);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(socialHandlesValidationSchema),
    defaultValues: {
      facebook:
        handles.find(
          (handle) => handle.platform.name === SOCIAL_MEDIAS.FACEBOOK
        )?.handle || "",
      linkedIn:
        handles.find(
          (handle) => handle.platform.name === SOCIAL_MEDIAS.LINKEDIN
        )?.handle || "",
      twitter:
        handles.find((handle) => handle.platform.name === SOCIAL_MEDIAS.TWITTER)
          ?.handle || "",
      youtube:
        handles.find((handle) => handle.platform.name === SOCIAL_MEDIAS.YOUTUBE)
          ?.handle || "",
    },
  });

  const sendToServer: SubmitHandler<
    InferType<typeof socialHandlesValidationSchema>
  > = (data) => mutate({ data });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="text-xs flex items-center justify-between bg-secondary-100/60 px-5 py-1 rounded-full"
      >
        <FaPlus /> <span>Add</span>
      </button>

      <Modal
        show={showModal}
        modalTitle="Social media handles"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={() => setShowModal(false)}
      >
        <form onSubmit={handleSubmit(sendToServer)}>
          {/* Facebook Handle Input */}
          <Input
            label="Facebook Handle"
            placeholder="Enter Facebook handle"
            {...register("facebook")}
            error={errors?.facebook}
          />

          {/* LinkedIn Handle Input */}
          <Input
            label="LinkedIn Handle"
            placeholder="Enter LinkedIn handle"
            {...register("linkedIn")}
            error={errors?.linkedIn}
          />

          {/* Twitter Handle Input */}
          <Input
            label="X(Twitter) Handle"
            placeholder="Enter Twitter handle"
            {...register("twitter")}
            error={errors?.twitter}
          />

          {/* YouTube Handle Input */}
          <Input
            label="YouTube Handle"
            placeholder="Enter YouTube handle"
            {...register("youtube")}
            error={errors?.youtube}
          />

          <div className="pt-5">
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
