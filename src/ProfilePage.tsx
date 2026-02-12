import NavbarComponent from "./NavbarComponent";

function ProfilePage() {
  return (
    <div className='bg-[#D496BB] min-h-screen'>
      <NavbarComponent />
      <link href = 'https://www.flaticon.com/free-icon/woman_6997662?term=profile&page=1&position=13&origin=search&related_id=6997662'></link>
      <h1 className='text-6xl font-bold text-center mt-8 text-white'> Welcome Jane Doe</h1>
    </div>
  )
}
export default ProfilePage;