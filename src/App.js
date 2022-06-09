import React from "react";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("example-plugin/example-custom-block", {
  title: __("Block Title"),
  category: "common",
  icon: "wordpress-alt",
  edit: props => <div className={props.className} />,
  save: props => <div className={props.className} />
});
