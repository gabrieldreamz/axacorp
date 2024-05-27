import React from "react";

function TabsMenu({ tabsName }: { tabsName: string }) {
  return (
    <div>
      Home &rasquo; <span>${tabsName}</span>
    </div>
  );
}

export default TabsMenu;
