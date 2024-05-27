import React from "react";

function TabsMenu({ tabsName }: { tabsName: string }) {
  return (
    <div>
      Home &gt; <span>{tabsName}</span>
    </div>
  );
}

export default TabsMenu;
