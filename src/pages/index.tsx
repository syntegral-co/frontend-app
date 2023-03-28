import { Outlet } from 'react-router-dom';

function Demo() {
  return (
    <div className="flex h-full gap-4">
      <Outlet />
    </div>
  );
}

export default Demo;
