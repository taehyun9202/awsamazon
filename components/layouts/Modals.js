import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../products/Cart";
import Menu from "./Menu";
import { setModalOpen } from "../../store/actions/utilAction";
import RightSidebarWrapper from "../wrapper/RightSidebarWrapper";
import LeftSidebarWrapper from "../wrapper/LeftSidebarWrapper";

const Modals = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.util.modals);
  return (
    <div>
      <LeftSidebarWrapper
        open={modalOpen.menu}
        setOpen={() => {
          dispatch(setModalOpen("menu", false));
        }}
      >
        <Menu
          open={modalOpen.menu}
          setOpen={() => {
            dispatch(setModalOpen("menu", false));
          }}
        />
      </LeftSidebarWrapper>

      <RightSidebarWrapper
        open={modalOpen.cart}
        setOpen={() => {
          dispatch(setModalOpen("cart", false));
        }}
      >
        <Cart
          open={modalOpen.cart}
          setOpen={() => {
            dispatch(setModalOpen("cart", false));
          }}
        />
      </RightSidebarWrapper>
    </div>
  );
};

export default Modals;
