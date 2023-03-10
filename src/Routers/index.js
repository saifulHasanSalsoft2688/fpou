import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import SignUp from "../Screens/registration";
import Tour from "../Screens/registration/Tour";
import Modal from "../Screens/registration/Modal";
import SupplierComplete from "../Screens/registration/CompleteProfile";
import AgencyComplete from "../Screens/registration/AgencyCompleteProfile";

import { Dashboard } from "../Screens/Dashboard";
import { Event } from "../Screens/Event";
import MaleDetails from "../Screens/MaleManagement/MaleDetails";
import { FemaleManagement } from "../Screens/FemaleManagement";
import FemaleDetails from "../Screens/FemaleManagement/FemaleDetails";
import { Applicants } from "../Screens/FemaleManagement/Applicants";
import ApplicantDetails from "../Screens/FemaleManagement/ApplicantDetails";
import { CommissionRate } from "../Screens/FemaleManagement/CommissionRate";

// FPOU screens 

import { CompanyProfile } from "../Screens/CompanyProfile";
import { EditCompanyProfile } from "../Screens/CompanyProfile/editCompanyProfile";
import { InviteCompany } from "../Screens/InviteCompany";
import { CreateEvent } from "../Screens/Event/CreateEvent";

// end 

import { Payments } from "../Screens/Payments";

import { Feedbacks } from "../Screens/Feedbacks";
import FeedbackDetails from "../Screens/Feedbacks/FeedbackDetails";

import { MiscounductReports } from "../Screens/MiscounductReports";
import ReportDetails from "../Screens/MiscounductReports/ReportDetails";

import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";

import Notifications from "../Screens/Notifications";

import Error from "../Screens/Error";


export default function AdminRouter() {
  return (
    <BrowserRouter basename="/fpou">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/complete-your-profile" element={<SupplierComplete />} />
        <Route path="/complete-your-agency-profile" element={<AgencyComplete />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/edit-company-profile" element={<EditCompanyProfile />} />
        <Route path="/invite-companies" element={<InviteCompany />} />

        <Route path="/event" element={<Event />} />
        <Route path="/add-event" element={<CreateEvent />} />
        <Route path="/male-details/:id" element={<MaleDetails />} />


        <Route path="/female-management" element={<FemaleManagement />} />
        <Route path="/female-details/:id" element={<FemaleDetails />} />
        <Route path="/applicants/" element={<Applicants />} />
        <Route path="/applicant-details/:id" element={<ApplicantDetails />} />
        <Route path="/commission-rate" element={<CommissionRate />} />

        <Route path="/payment-logs" element={<Payments />} />

        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/feedback-details/:id" element={<FeedbackDetails />} />

        <Route path="/misconduct-reports" element={<MiscounductReports />} />
        <Route path="/report-details/:id" element={<ReportDetails />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
