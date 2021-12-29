<script>
  import { Router, Route, Link } from 'svelte-navigator'
  import { onMount } from 'svelte'
  import Play from './Pages/Play.svelte'
  import About from './Pages/About.svelte'
  import Profile from './Pages/Profile.svelte'
  import LeaderBoard from './Pages/LeaderBoard.svelte'
  import Home from './Pages/Home.svelte'

  let profile = '../Images/Settings/settings.svg'
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
    const serverUrl = 'https://kqv1hqmigpho.usemoralis.com:2053/server'
    const appId = 'XdXC23U4SiRFenvHOPrk5Mtp8arlfIbMtdAI0UpO'
    Moralis.start({ serverUrl, appId })

    login()
  })

  function handleClick() {
    alert('no more alerts')
  }
</script>

<main>
  <Router>
    <header>
      <nav class="flex text-center items-center justify-center">
        <Link to="/" class="m-3 duration-700 ease-in-out hover:text-yellow-400">
          Home
        </Link>
        <Link
          to="play"
          class="m-3 duration-700 ease-in-out hover:text-yellow-400">
          Play
        </Link>
        <Link
          to="about"
          class="m-3 duration-700 ease-in-out hover:text-yellow-400">
          About
        </Link>
        <Link
          to="leaderBoard"
          class="m-3 duration-700 ease-in-out hover:text-yellow-400">
          LeaderBoard
        </Link>
        <Link
          to="profile"
          class="m-3 duration-700 ease-in-out hover:rotate-180">
          <img src={profile} alt="settings" width={28} height={28} />
        </Link>
        <button
          class="bg-transparent duration-700 ease-in-out hover:bg-yellow-500
          text-gray-200 font-semibold hover:text-gray-800 py-2 px-4 border
          border-yellow-500 hover:border-transparent rounded">
          Login
        </button>
      </nav>
    </header>
    <hr class="m-5" />
    <Route path="/">
      <Home />
    </Route>
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
