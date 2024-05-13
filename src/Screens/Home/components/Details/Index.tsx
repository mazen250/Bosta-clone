import Address from "./Address";
import Details from "./Details";
import i18next from "../../../../locals/i18n";
function Index() {
  return (
    <div
      className={`flex-1 flex flex-col md:flex-row justify-between items-center w-[90%] m-auto ${i18next.language === 'en' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="w-full md:w-[60%] h-full py-4 md:py-0">
        <Details />
      </div>
      <div className="w-full md:w-[35%] py-4 md:py-0">
        <Address />
      </div>
    </div>
  );
}

export default Index;
