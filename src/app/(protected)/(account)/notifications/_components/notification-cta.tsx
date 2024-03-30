import { LinkButton } from "components/link-button";
import { NotificationCtaType } from "interfaces";

export const NotificationCta = ({
  ctaType,
  itemId,
}: {
  ctaType?: NotificationCtaType;
  itemId?: string;
}) => {
  if (!ctaType && !itemId) {
    return null;
  }

  if (ctaType === NotificationCtaType.CONNECTION_REQUEST) {
    return (
      <LinkButton
        size="sm"
        href={`/connections`}
        variant="transparent"
        radius="rounded-full"
        className="border-secondary-500 w-24 py-1 mt-3 hover:bg-secondary-500 hover:text-white"
      >
        View
      </LinkButton>
    );
  }

  if (ctaType === NotificationCtaType.NEW_SOP_TASK) {
    return (
      <LinkButton
        size="sm"
        href={`/helper/${itemId}`}
        variant="transparent"
        radius="rounded-full"
        className="border-secondary-500 w-24 py-1 mt-3 hover:bg-secondary-500 hover:text-white"
      >
        Upload SOP
      </LinkButton>
    );
  }

  if (ctaType === NotificationCtaType.COMPLETED_SOP) {
    return (
      <LinkButton
        size="sm"
        href={`/profile/user`}
        variant="transparent"
        radius="rounded-full"
        className="border-secondary-500 w-24 py-1 mt-3 hover:bg-secondary-500 hover:text-white"
      >
        Download SOP
      </LinkButton>
    );
  }
  return null;
};
