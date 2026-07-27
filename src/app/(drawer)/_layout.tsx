import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen 
        name="(tabs)" 
        options={{ drawerLabel: 'Dashboard', title: 'Dashboard' }} 
      />
      <Drawer.Screen 
        name="announcements" 
        options={{ drawerLabel: 'Announcements', title: 'Announcements' }} 
      />
      <Drawer.Screen 
        name="about" 
        options={{ drawerLabel: 'About App', title: 'About' }} 
      />
      <Drawer.Screen 
        name="help" 
        options={{ drawerLabel: 'Help & Support', title: 'Help & Support' }} 
      />
    </Drawer>
  );
}