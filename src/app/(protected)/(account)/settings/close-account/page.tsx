"use client";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { Skeleton } from "components/skeleton";
import { useAccount, useCloseAccount } from "hooks/account";
import { useCountConnections } from "hooks/connections";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const { data: user, isPending } = useAccount();
  const { data: connections } = useCountConnections();

  const [showModal, setShowModal] = useState<boolean>(true);

  const handleSuccess = () => {
    router.push("/");
  };
  const handleModalClose = () => {
    setShowModal(false);

    // redirect to settings page
    router.push("/settings");
  };
  const { mutate: closeAccount, isPending: isSubmitting } = useCloseAccount(
    () => handleSuccess()
  );

  return (
    <div>
      <Modal
        show={showModal}
        modalTitle="Close Account"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={handleModalClose}
      >
        {isPending ? (
          <div>
            <div className="space-y-6">
              {[...new Array(4)]?.map((_, index: number) => (
                <div key={index}>
                  <Skeleton width={80} />
                  <Skeleton height={50} />
                </div>
              ))}
            </div>
            <Skeleton
              height={45}
              className="mt-8"
              width={150}
              borderRadius={100}
            />
          </div>
        ) : (
          <div className="bg-[#FDEEEA] p-6 rounded-xl mt-5">
            <div className="font-medium text-xl">
              Dear {user?.firstName}, we regret your departure.
            </div>
            <div className="mt-3 space-y-4 text-gray-500">
              <p>
                A friendly reminder that when you close your account, you will
                also be cutting ties with all {connections?.count} of your
                connections.
              </p>
              <p>
                Your endorsements and suggestions, both offered and received,
                will likewise be gone.
              </p>
            </div>
            <div className="pt-10">
              <Button
                type="submit"
                className="h-12 "
                radius="rounded-full focus:rounded-full"
                variant="danger"
                isLoading={isSubmitting}
                onClick={() => closeAccount()}
              >
                Close Account
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
