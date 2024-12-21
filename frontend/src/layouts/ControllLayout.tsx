import React from 'react';

interface IControlLayout {
  children?: React.ReactNode;
}

const ControlLayout: React.FC<IControlLayout> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-max grid grid-rows-[64px_auto] grid-cols-[120px_auto]">
      <header className="bg-red-400 col-span-2">Hi</header>
      <aside className="bg-green-400"></aside>
      <main className="bg-blue-600">{children}</main>
    </div>
  );
};

export default ControlLayout;
