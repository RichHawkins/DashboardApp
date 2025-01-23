import CalendarComponent from "../components/CalendarComponent"
import ChatComponent from "../components/ChatComponent"
import UsefulLinks from "../components/UsefulLinks"
import Updates from "../components/Updates"

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <CalendarComponent />
      <ChatComponent />
      <UsefulLinks />
      <Updates />
    </div>
  )
}

