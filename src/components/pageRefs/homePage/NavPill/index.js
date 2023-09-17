import classes from './styles.module.scss'

const HomeNavPill = ({ navSelect, setNavSelect }) => {
  return (
    <div className={classes.navContainer}>
      <div
        className={classes.leftNav}
        onClick={() => setNavSelect(0)}
      >
        <h2 style={navSelect ? {} : { color: 'black' }}>
          Sign In
        </h2>
      </div>
      <div
        className={classes.rightNav}
        onClick={() => setNavSelect(1)}
      >
        <h2 style={navSelect ? { color: 'black' } : {}}>
          Register
        </h2>
      </div>
      <span
        className={classes.navSelected}
        style={navSelect ? { transform: 'translateX(100%)' } : {}}
      />
  </div>
  )
}

export default HomeNavPill
