import imgQ4F23LsBowerySpillTestElv175Nocookie from "figma:asset/7de9fd42dc384fcd35864d8513e7db6875f34bb1.png";

function Q3Y25MiyLpEcoImgD() {
  return (
    <div
      className="bg-[#d7d8d7] h-[531px] overflow-clip relative shrink-0 w-[830px]"
      data-name="q3y25-miy-lp-eco-img_D"
    >
      <div
        className="absolute aspect-[2732/4096] bg-center bg-cover bg-no-repeat bottom-[-145.952%] top-[-140.714%] translate-x-[-50%]"
        data-name="Q4_F23_LS_Bowery_Spill-Test_ELV_175_NOCOOKIE"
        style={{
          left: "calc(50% + 213.597px)",
          backgroundImage: `url('${imgQ4F23LsBowerySpillTestElv175Nocookie}')`,
        }}
      />
    </div>
  );
}

function OverlineHeaderBody() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-5 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-[#214f52] text-left w-full"
      data-name="overline + header + body"
    >
      <div className="css-84ded1 font-['TT_Commons_Pro:Black',_sans-serif] relative shrink-0 text-[18px] tracking-[2.4px] uppercase w-full">
        <p className="block leading-[20px]">Customize responsibly</p>
      </div>
      <div className="css-ru1bl4 font-['TT_Commons_Pro:ExtraBold',_sans-serif] relative shrink-0 text-[48px] tracking-[-0.56px] w-full">
        <p className="block leading-[48px]">
          Eco-Performance
          <br />
          fabrics
        </p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-10 items-center justify-center px-[35px] py-3.5 relative rounded shrink-0"
      data-name="Buttons"
    >
      <div className="absolute border-2 border-[#393a39] border-solid inset-0 pointer-events-none rounded" />
      <div className="css-vrm12z font-['TT_Commons_Pro:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#393a39] text-[16px] text-left text-nowrap tracking-[0.16px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          See Why Eco Matters
        </p>
      </div>
    </div>
  );
}

function HeaderTxtFillsRegular() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[50px] items-start justify-start p-0 relative shrink-0 w-[526px]"
      data-name="header txt + fills - regular"
    >
      <OverlineHeaderBody />
    </div>
  );
}

export default function EcoFabs() {
  return (
    <div className="bg-[#d2e3f4] relative size-full" data-name="eco fabs">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-20 items-center justify-start mx-auto max-w-[1440px] py-[60px] relative size-full">
          <Q3Y25MiyLpEcoImgD />
          <HeaderTxtFillsRegular />
        </div>
      </div>
    </div>
  );
}