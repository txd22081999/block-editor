import React from "react";
import { useEffect, useState } from "@wordpress/element";
import {
  BlockEditorKeyboardShortcuts,
  BlockEditorProvider,
  BlockList,
  BlockInspector,
  WritingFlow,
  ObserveTyping
} from "@wordpress/block-editor";
import {
  Popover,
  SlotFillProvider,
  DropZoneProvider
} from "@wordpress/components";
import { registerCoreBlocks } from "@wordpress/block-library";
import "@wordpress/format-library";
import "./../App";

/**
 * Application
 */
export default props => {
  const [blocks, updateBlocks] = useState([]);

  useEffect(() => {
    registerCoreBlocks();
  }, []);

  return (
    <div className="playground">
      <SlotFillProvider>
        <DropZoneProvider>
          <BlockEditorProvider
            value={blocks}
            onInput={updateBlocks}
            onChange={updateBlocks}
          >
            <div className="editor-styles-wrapper">
              <BlockEditorKeyboardShortcuts />
              <WritingFlow>
                <ObserveTyping>
                  <BlockList />
                </ObserveTyping>
              </WritingFlow>
              <Popover.Slot />
            </div>

            <div className="playground__sidebar">
              <BlockInspector />
            </div>
          </BlockEditorProvider>
        </DropZoneProvider>
      </SlotFillProvider>
    </div>
  );
};
