import { mdiMonitorDashboard, mdiBlogger, mdiNotebookCheckOutline } from '@mdi/js'
export const tabs = [
     {
          path: "/",
          icon: mdiNotebookCheckOutline,
          text: "Overview"
     },
     {
          path: "portfolio",
          icon: mdiMonitorDashboard,
          text: "Portfolio"
     },
     {
          path: "/blog",
          icon: mdiBlogger,
          text: "Blog"
     }
];