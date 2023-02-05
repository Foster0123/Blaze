import ProfilePicture from './../assets/img/user.png'
const Account = () => {
    return (
        <div>
            <div className="account-page"></div>
            <section className="account-intro">
                <h2 className='account-intro-header'>Info</h2>
                <div className="account-intro-profile-image">
                    <img src={ProfilePicture} alt="Account Profile Image" />
                    <label htmlFor="account-profile-image">
                        <i className="bi bi-camera2"></i>
                        <input type="file" name="account_profile_image" id='account-profile-image' />
                    </label>
                </div>
            </section>
            <section className="account-update"></section>
            <section className="account-additionals"></section>
            <section className="account-operation"></section>
            <h1>Account Page</h1>
        </div>
    )
}
export default Account;