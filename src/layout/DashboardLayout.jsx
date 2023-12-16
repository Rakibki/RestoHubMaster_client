import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
        <div className="grid-cols-3">
            <div>
                
            </div>
        </div>
        <div className="grid-cols-9">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout