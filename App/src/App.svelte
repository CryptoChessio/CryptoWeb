<script>
  import { Router, Route, Link } from 'svelte-navigator'
  import { onMount } from 'svelte'
  import Play from './Pages/Play.svelte'
  import About from './Pages/About.svelte'
  import Profile from './Pages/Profile.svelte'
  import LeaderBoard from './Pages/LeaderBoard.svelte'

  async function login() {
    let user = Moralis.User.current()
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: 'Log in using Moralis',
      })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      console.log(user)
    }
  }

  onMount(() => {
    // Moralis.initialize("XdXC23U4SiRFenvHOPrk5Mtp8arlfIbMtdAI0UpO"); // Application id from moralis.io
    // Moralis.serverURL = "https://kqv1hqmigpho.usemoralis.com:2053/server"; //Server url from moralis.io

    const serverUrl = 'https://kqv1hqmigpho.usemoralis.com:2053/server'
    const appId = 'XdXC23U4SiRFenvHOPrk5Mtp8arlfIbMtdAI0UpO'
    Moralis.start({ serverUrl, appId })

    login()
  })
</script>

<main>
  <p>Hello</p>

  <Router>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="play">Play</Link>
        <Link to="about">About</Link>
        <Link to="leaderBoard">LeaderBoard</Link>
        <Link to="profile">Profile</Link>
      </nav>
    </header>
    <Route path="play">
      <Play />
    </Route>

    <Route path="about">
      <About />
    </Route>

    <Route path="leaderBoard">
      <LeaderBoard />
    </Route>

    <Route path="profile">
      <Profile />
    </Route>

  </Router>

</main>
