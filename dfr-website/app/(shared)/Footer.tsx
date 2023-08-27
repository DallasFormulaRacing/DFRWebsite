import React from "react";

const Footer = () => {
  return (
    <footer className={"bg-wh-900 text-wh-50 py-10 px-10"}>
      <div className={"justify-between mx-auto gap-16 sm:flex"}>
        {/*First*/}
        <div className={"mt-16 basis-1/2 sm:mt-0"}>
          <h4 className={"font-bold"}>Blog</h4>
          <p className={"my-5"}>Lorem vitae ut</p>
          <p className={"my-5"}>ouvert</p>
          <p>@copyright ALl rights Reserved.</p>
        </div>
        {/*Second*/}
        <div className={"mt-16 basis-1/4 sm:mt-0"}>
          <h4 className={"font-bold"}>Links</h4>
          <p className={"my-5"}>Lorem vitae ut</p>
          <p className={"my-5"}>ouvert</p>
          <p>Veni</p>
        </div>
        {/*Third*/}
        <div className={"mt-16 basis-1/4 sm:mt-0"}>
          <h4 className={"font-bold"}>Contact us</h4>
          <p className={"my-5"}>Tempus</p>
          <p className={"my-5"}>ouvert</p>
          <p>(123)456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
