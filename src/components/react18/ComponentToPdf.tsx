import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React from "react";
import { CarouselDemo } from "./Carousel";

export const ComponentToPdf = () => {
  const printRef: any = React.useRef();

  const handleDownloadPdf = async () => {
    const element: any = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <>
      <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
      <div className="flex justify-center items-center" ref={printRef}>
        <div style={{ margin: 100 }}>
          <CarouselDemo />
        </div>
      </div>
    </>
  );
};
