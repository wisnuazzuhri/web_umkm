import React from "react";
import { Footer } from "flowbite-react";

const Credit = () => {
  return (
    <div className="flex flex-row justify-between shadow-md mt-10">
      <Footer container>
        <div>
          <Footer.Copyright href="#" by="ReyWisDev™" year={2024} />
        </div>
        <div>
          <a className="text-gray-500">GPI</a>
        </div>
        <div>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>

            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  );
};

export default Credit;
