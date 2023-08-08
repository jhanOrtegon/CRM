import { BrowserRouter, Route, Routes } from "react-router-dom";

//ProtectedRoute
import { ProtectedRoute } from "@/components/ProtectedRoute";

//pages
import { LoginPage, PasswordRecoveryPage } from "@/pages/auth/";

import {
  DashboardPage,
  MyContactsPage,
  RefereesPage,
  EmailMarketingPage,
  FormsPage,
  SatisfactionSurveyPage,
  SalesProcessesPage,
  OpportunitiesPage,
  SegmentsPage,
  TagsPage,
  AccountsPage,
  AreasPage,
  RolesPermissionsPage,
  PlacesPage,
  UsersPage,
  ServicesPage,
  ConnectionsPage,
  TaskPage
} from "@/pages/private";


const AppRoutes = () => {
  // const [user, setUser] = useState(null);

  // const login = () =>
  //   setUser({
  //     id: 1,
  //     name: "John",
  //     permissions: [""],
  //     roles: ["admin"],
  //   });


  return (
    <BrowserRouter>

      <Routes>

        <Route index path="/" element={<LoginPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/passwordRecovery" element={<PasswordRecoveryPage />} />

        <Route element={<ProtectedRoute isAllowed={true} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/task" element={<TaskPage />} />

          <Route path="/contacts/myContacts" element={<MyContactsPage />} />
          <Route path="/contacts/referees" element={<RefereesPage />} />

          <Route path="/marketing/emailMarketing" element={<EmailMarketingPage />} />
          <Route path="/marketing/forms" element={<FormsPage />} />
          <Route path="/marketing/satisfactionSurvey" element={<SatisfactionSurveyPage />} />

          <Route path="/sales/salesProcesses" element={<SalesProcessesPage />} />
          <Route path="/sales/opportunities" element={<OpportunitiesPage />} />

          <Route path="/settings/segments" element={<SegmentsPage />} />
          <Route path="/settings/tags" element={<TagsPage />} />
          <Route path="/settings/accounts" element={<AccountsPage />} />
          <Route path="/settings/areas" element={<AreasPage />} />
          <Route path="/settings/rolesPermissions" element={<RolesPermissionsPage />} />
          <Route path="/settings/places" element={<PlacesPage />} />
          <Route path="/settings/users" element={<UsersPage />} />
          <Route path="/settings/services" element={<ServicesPage />} />
          <Route path="/settings/connections" element={<ConnectionsPage />} />

        </Route>

        {/* <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <DashboardPage />
            </ProtectedRoute>
          }
        /> */}

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;