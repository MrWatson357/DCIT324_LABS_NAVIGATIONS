import React, { createContext, useState, useContext } from 'react';

type ProfileData = {
  name: string;
  bio: string;
  programme: string;
  indexNumber: string;
  level: string;
};

type ProfileContextType = {
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Samuel Watson Tettey',
    bio: 'Computer Science Student & Front-End Developer',
    programme: 'BSc Computer Science',
    indexNumber: '22237616',
    level: '300',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) throw new Error('useProfile must be used within ProfileProvider');
  return context;
};