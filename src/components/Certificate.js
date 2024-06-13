import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import goldensheild from '../assets/golden-sheild.png'
import star from '../assets/star-symbol.png'
import achievement from '../assets/achievement.png'

export default function Certificate() {
    const schoolName = "school of excellence"
    const studentName = "Shanmukh"
    const classProjectName = "react certificate generator"
    const date = "2024-06-13"
    const presenter = "Kim jong un"

    const pdfRef = useRef();

    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('certificate.pdf');
            });
    }
  return (
    <div>
        <div className="container p-4 w-full h-screen border-[20px] border-amber-300 justify-center items-center" ref={pdfRef}>
      <div className="flex justify-center">
        <img className="w-6 h-10 mt-20" src={star} alt="star icon"/>
        <img className="w-8 h-12 mt-16" src={star} alt="star icon"/>
        <img className="w-10 h-12 mt-14" src={star} alt="star icon"/>
        <img className="w-40 h-40 mx-5" src={goldensheild} alt="golden star"/>
        <img className="w-10 h-12 mt-14" src={star} alt="star icon"/>
        <img className="w-8 h-12 mt-16" src={star} alt="star icon"/>
        <img className="w-6 h-10 mt-20" src={star} alt="star icon"/>
      </div>
      <div className="w-full flex flex-col mt-12 items-center">
        <p className="text-4xl font-semibold capitalize">{schoolName}</p>
        <p className="text-4xl font-serif mt-2 font-bold capitalize">certificate of excellence</p>
        <p className="text-2xl mt-2">is hereby granted to</p>
        <p className="text-7xl font-semibold capitalize mt-6">{studentName}</p>
        <p className="text-2xl mt-6">for outstanding performance in</p>
        <p className="text-3xl mt-2 capitalize font-semibold">{classProjectName}</p>
      </div>
      <div className="flex mt-12 justify-between text-center px-16">
        <p className="capitalize font-light">date: {date}</p>
        <p className="capitalize font-light">presenter's name/title: {presenter}</p>
      </div>
      <div className="flex justify-between w-full mt-16 px-8">
        <hr className="mt-12 w-60" />
        <img className="w-24 h-24" src={achievement} alt='bottom-img'/>
        <hr className="mt-12 w-60" />
      </div>
    </div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4' onClick={downloadPdf}>Download PDF</button>
    </div>
  )
}