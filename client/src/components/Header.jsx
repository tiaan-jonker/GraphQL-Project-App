import logo from './assets/logo.png'

export const Header = () => {
  return (
    <div className='navbar bg-light mb-5 p-2'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo} alt='logo' className='mr-2' />
            <div>GraphQL Project</div>
          </div>
        </a>
      </div>
    </div>
  )
}
