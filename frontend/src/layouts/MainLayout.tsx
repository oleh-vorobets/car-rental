import React, { useState } from 'react';
import Icon from '../components/UI/Icon';
import Logo from '../assets/icons/hooli.png';
import SearchInput from '../components/Feature/Header/SearchInput';
import PrimaryButton from '../components/UI/PrimaryButton';
import PlusSvg from '../assets/svgs/PlusSvg';
import Face from '../assets/images/temp-ui-face.jpg';
import StarSvg from '../assets/svgs/StarSvg';
import IconButton from '../components/Feature/AsideBar/IconButton';
import HomeSvg from '../assets/svgs/HomeSvg';
import CarSvg from '../assets/svgs/CarSvg';
import HeartSvg from '../assets/svgs/HeartSvg';
import CalendarSvg from '../assets/svgs/CalendarSvg';
import DocumentSvg from '../assets/svgs/DocumentSvg';
import BellSvg from '../assets/svgs/BellSvg';
import SettingsSvg from '../assets/svgs/SettingsSvg';
import DoorSvg from '../assets/svgs/DoorSvg';

interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="min-h-screen min-w-max grid grid-rows-[auto_1fr] grid-cols-[120px_auto] text-primary font-roboto">
      <header className="col-span-2 relative py-1 px-8 border-b-secondary-light border-b-2 flex justify-between items-center">
        <Icon image={Logo} className="w-36" />
        <div className="flex flex-row gap-8 justify-center">
          <SearchInput
            placeholder="Search cars..."
            value={searchValue}
            onChange={setSearchValue}
            className="mr-16"
          />
          <PrimaryButton icon={PlusSvg} className="py-0">
            {' '}
            Post an add
          </PrimaryButton>
          <div className="flex flex-row gap-4 relative max-h-full">
            <img src={Face} className="rounded-full aspect-square w-14" />
            <div className="flex flex-col justify-center">
              <p className="text-lg">Edward Jackson</p>
              <div className="flex flex-row gap-1 items-center text-secondary">
                4.8 <StarSvg />
              </div>
            </div>
          </div>
        </div>
      </header>
      <aside className="flex flex-col justify-between items-center py-8">
        <div className="flex flex-col gap-4 mb-16">
          <IconButton>{HomeSvg}</IconButton>
          <IconButton>{CarSvg}</IconButton>
          <IconButton>{HeartSvg}</IconButton>
          <IconButton>{CalendarSvg}</IconButton>
          <IconButton>{DocumentSvg}</IconButton>
        </div>
        <div className="flex flex-col gap-4">
          <IconButton>{BellSvg}</IconButton>
          <IconButton>{SettingsSvg}</IconButton>
          <IconButton className="text-error border-red-400 hover:bg-error">
            {DoorSvg}
          </IconButton>
        </div>
      </aside>
      <main className="bg-blue-600">{children}</main>
    </div>
  );
};

export default MainLayout;
