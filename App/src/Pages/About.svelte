<script>
  import { useNavigate, useLocation } from 'svelte-navigator'
  const DAI = "../Images/Icons/DAI.png";
  const MATIC = "../Images/Icons/polygon.png";
  const BAT = "../Images/Icons/bat.png";
  const navigate = useNavigate()
  const location = useLocation()
</script>

<main>
  <div>
    <h1 class="text-8xl">Who are we?</h1>
    <p>
      Rn its just me and kinda my gf trying to make a fun game and get into the
      world of crypto gaming
    </p>
  </div>

  <div>
    <h1 class="text-8xl">What is this?</h1>
    <p>
      A crypto "gaining" game where you can "stake" crypto during a game of
      chess. The winner of the game gets the combined yeild of the stakers
    </p>
  </div>

  <div>
    <h1 class="text-8xl">Tokenomics?</h1>
    <div
      class="list-none text-center items-center justify-center flex shadow-xl m-5">
      <div
        class="bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-lg p-5 m-2">
        <img
          src={DAI}
          alt="DAI"
          width={25}
          height={25}
          class="duration-700 ease-in-out hover:rotate-90 " />
        <p>
          <strong class="text-xl">DAI</strong>
          <br />
          DAI is a decentralized stablecoin that is pegged to the USD.
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-indigo-400 to-indigo-800 rounded-lg p-5 m-2
        shadow-xl">
        <img
          src={MATIC}
          alt="polygon"
          width={25}
          height={25}
          class="fill-white duration-700 ease-in-out hover:rotate-180" />
        <p>
          <strong class="text-xl">MATIC</strong>
          <br />
          MATIC (Polygon) is the utility token for the Matic network a layer 2
          scaling protocol for the ethereum blockchain.
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-orange-500 to-violet-700 rounded-lg p-5
        m-2 shadow-xl">
        <img
          src={BAT}
          alt="BAT"
          width={25}
          height={25}
          class="fill-white duration-700 ease-in-out hover:rotate-90" />
        <p>
          <strong class="text-xl">BAT</strong>
          <br />
          BAT is the utility token for the Brave browser.
        </p>
      </div>
    </div>
  </div>
</main>
