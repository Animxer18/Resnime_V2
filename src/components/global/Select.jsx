import { Input, Select as SelectChakra } from "@chakra-ui/react";
import useResponsive from "../../hooks/useResponsive";
import Drawer from "./Drawer";
import { Fragment, useState } from "react";

/**
 * @typedef {Object} ArrListOptions
 * @property {String} label
 * @property {String} value
 */
/**
 * @typedef AddPropsSelect
 * @property {ArrListOptions[]} listOptions
 * @property {String} placeholder
 */
/**
 *
 * @param {AddPropsSelect & import("@chakra-ui/react").SelectProps} param0
 * @returns
 */
const Select = ({ listOptions, placeholder = "Select One", ...props }) => {
  const { sm } = useResponsive();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [valueSelected, setValueSelected] = useState("");

  if (sm) {
    return (
      <>
        <Input
          placeholder={placeholder}
          onClick={() => {
            setOpenDrawer(true);
          }}
          readOnly
          value={listOptions?.find((d) => d?.value === valueSelected)?.label}
        />
        <Drawer
          placement="bottom"
          isOpen={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
          {...(placeholder && {
            header: <>{placeholder}</>,
          })}
        >
          <SelectChakra
            multiple
            placeholder={placeholder}
            {...props}
            height={300}
            onChange={(e) => {
              if (props?.onChange) {
                props?.onChange(e);
              }
              setOpenDrawer(false);
              setValueSelected(e?.target?.value);
            }}
            icon={<Fragment />}
          >
            {listOptions?.map((opt, idx) => (
              <option style={{ padding: 10 }} key={idx} value={opt?.value}>
                {opt?.label}
              </option>
            ))}
          </SelectChakra>
        </Drawer>
      </>
    );
  }
  return (
    <SelectChakra placeholder={placeholder} {...props}>
      {listOptions?.map((opt, idx) => (
        <option key={idx} value={opt?.value}>
          {opt?.label}
        </option>
      ))}
    </SelectChakra>
  );
};
export default Select;
