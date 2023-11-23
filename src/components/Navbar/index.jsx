import React, { useState } from 'react';
import useDarkMode from "../../hooks/useDarkMode";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import styles from "./index.module.scss";

const Navbar = () => {
  const changer = useDarkMode();

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      {/* <div className={styles.navbar}>
        <div>
          <a href=""> home</a>
          <a href=""> home</a>
          <a href=""> home</a>
          <a href=""> home</a>
        </div>
        <div>
          <button onClick={changer}>Change Theme</button>
        </div>
      </div> */}

      <div>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It&#39;s also worth noting that just about any
              HTML can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Navbar;
