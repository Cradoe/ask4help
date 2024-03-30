import { Button } from "components/button";
import { jsPDF } from "jspdf";
import { useCallback } from "react";

export const DownloadSopReviewModal = ({ content }: { content: string }) => {
  const generatePdf = useCallback(() => {
    if (!content) return;
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
    });

    var splitTitle = doc.splitTextToSize(content, 270);
    doc.setFontSize(11);
    var y = 7;
    for (var i = 0; i < splitTitle?.length; i++) {
      if (y > 280) {
        y = 10;
        doc.addPage();
      }
      doc.text(splitTitle?.[i], 10, y, { lineHeightFactor: 2 });
      y = y + 7;
    }

    doc.save(`Reviewed SOP`);
  }, [content]);

  return (
    <div>
      <Button
        onClick={generatePdf}
        radius="rounded-full"
        size="sm"
        variant="secondary"
        className="text-xs"
      >
        Download SOP
      </Button>
    </div>
  );
};
