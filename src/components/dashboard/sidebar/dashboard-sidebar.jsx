import React from "react";
import "./dashboard-sidebar.css"
import swiftTransfer from "./Images/swiftTransferIcon.png"
import collapse from "./Images/collapse.png"
import sendmoney from "./Images/account.png"
import notifications from "./Images/notifications.png"
import transactionActivity from "./Images/transactionActivity.png"
import account from "./Images/account.png"
const DashboardSidebar = () => {
  return (
    <div>
      <div className="sidebar-header">
        <img className="swift-transafer-icon" src={swiftTransfer} alt="swift-transfer-icon" />
        <h1>SwiftTransfer</h1>
      </div>

      <section className="sidebar-section">
        {/* TODO Collapse the sidebar */}
        <div>
          <img className="sidebar collasper-sidebar" src={collapse} alt="collapse-sidebar"/>
          <h2>Collaspse Sidebar </h2>
        </div>

        <div>
          <img className=" sidebar send-money-icon" src={sendmoney} alt="send-money-icon"/>
          <h2>Send Money </h2>
        </div>

        <div>
          <img className="sidebar transaction Activity" src={transactionActivity} alt="transaction-activity"/>
          <h2>Transaction Activity </h2>
        </div>

        <div>
          <img className="sidebar notifications-icon" src={notifications} alt="notifications-icon"/>
          <h2>Notifications </h2>
        </div>

        <div>
          <img className="sidebar account-icon" src={account} alt=" account-icon"/>
          <h2>My Account</h2>
        </div>
      </section>
    </div>
  );
};

export default DashboardSidebar;
