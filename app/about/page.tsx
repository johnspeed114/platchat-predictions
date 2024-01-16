import React from 'react';

export default function About() {
  return (
    <main className="flex justify-center items-center content-center flex-col">
      <section className="flex justify-center items-center flex-col max-w-6xl px-4">
        <h1 className="my-5 font-bold text-3xl sm:text-4xl font-childshandwriting">
          About This Site
        </h1>
        <p className="mb-5">
          Welcome to my Valorant Visionaries' Predictions! If you're all about
          VALORANT esports and love Plat Chat Valorant, you're in the right
          place. Here, we track and showcase how well Plat Chat members predict
          outcomes of major international tournaments. It's all about adding
          more fun to the esports experience! Quick heads-up: I don't have loads
          of individual data for the Plat Chat crew, so sorry Avast for the
          rough success rate showcase. Most of my info is on the group as a
          whole, Sliggy, and Thinking Man Valorant – that's why their
          predictions seem spot-on. The rest of you, I need you to do more
          pickems individual plz! Yeah, looking at you, Avast. 😉
        </p>
        <section>
          <h2 className="font-bold text-lg text-center">Data Sources</h2>
          <p className="mb-5">
            A big shoutout to <b>Rib.gg</b> for providing all my VCT data for my
            spreadsheets. Without them, I'd be buried under piles of data entry!
            For more juicy VALORANT esports stats, do check out their website.
            My focus is on Plat Chat VALORANT members' predictions for only VCT
            international tournaments (2021-2023). We're talking success rates,
            total matches predicted, and the number of correct guesses. This is
            due to simplicity sake for viewers and me. Checkout my spreadsheet
            and sources down below:
            <ul className="list-disc pl-4 mt-2">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1tKKw7tt-UHf931EXR3kGzF0LYLxlyKUIuOMX8AxB3Bc/edit?usp=sharing"
                  className="text-blue-500 underline"
                >
                  My Spreadsheet on Google Sheets
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Plat ChatVALORANT"
                  className=" text-blue-500 underline"
                >
                  Plat Chat VALORANT Podcast
                </a>
              </li>
              <li>
                <a
                  href="https://www.rib.gg/"
                  className="text-blue-500 underline"
                >
                  Rib.gg
                </a>
              </li>
              <li>
                <a
                  href="https://liquipedia.net/valorant"
                  className="text-blue-500 underline"
                >
                  Liquipedia Valorant
                </a>
              </li>
            </ul>
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">
            Methodologies and Calculations
          </h2>
          <p className="mb-5">
            So, how is it done? I dive into each Plat Chat podcast episode and
            note down the crew's predictions. When it's a solo forecast, cool.
            When not, the group's guess is whatever most members lean towards in
            that episode. Success rates? Just me comparing their guesses against
            actual match results. I used smiling faces show a success rate above
            or equal to 50%, while sad faces are used for rates below 50%. Think
            of it as fun with a dash of serious. And yep, I'm aware there are
            gaps – like group or playoff series prediction data. But hey, maybe
            you guys or the Plat Chat members can help fill in those blanks
            someday!
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">
            Limitations and Considerations
          </h2>
          <p className="mb-5">
            As much as I'd love to be perfect, there are some limitations. We're
            skipping a lot of the regional predictions and missing group playoff
            series data. For the sake of fun and simplicity, I've treated all
            matches equally, even if predicitions migh skew a bit as the
            tournament goes deeper. Got more data or spotted something off?
            Holler at me at
            <a href="mailto:jojomojojo194@gmail.com" className="text-blue-400">
              <strong> jojomojojo194@gmail.com</strong>
            </a>
            . Check out a couple of specific cases I had to tweak:
            <br />
            <b className="underline">Specific Cases</b>
            <br />
            <b>[VCT 2021 Masters Berlin - Group D]: </b>
            Take 2021 Masters Berlin, where one team couldn’t participate. For
            the affected group, which included teams like Sentinels, F4Q, and
            G2, I adjusted my approach. I did't count these matches in the
            prediction for similplicity.
            <br />
            <b>[VCT 2022 Masters Reykjavik - Lower Bracket Final]: </b>Had to
            make a call on a tie between Paper Rex and ZETA Division. I went
            with ZETA Division, just to keep things smooth. 😊 😊
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-center">Future Direction</h2>
          <p className="mb-5">
            Future plans? I'm trying to improve my methods and look at things
            more broadly. Expect more regional matches and some more interactive
            data visualizations to play with. Also, I'm looking to add top
            streamers predicitons into mix eventually. Got feedback or ideas?
            I'm all ears! Shoot me an email or discord message!
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">Contact and Credits</h2>
          <p className="mb-5">
            For any thoughts or feedback, drop me a line at:
            <ul className="list-disc pl-4 mt-2">
              <li>
                <a
                  href="mailto:jojomojojo194@gmail.com"
                  className="text-blue-400 underline"
                >
                  <strong> jojomojojo194@gmail.com</strong>
                </a>
              </li>
              <li>
                Discord:
                <a
                  href="https://discord.com/user/229793786925023242"
                  className="text-blue-400 underline pl-1"
                >
                  <strong>bot_mat</strong>
                </a>
              </li>
            </ul>
            <br /> And a massive shoutout to Plat Chat VALORANT for being a key
            source of the predictions data and to the VALORANT community for
            their enthusiasm and support!
          </p>
        </section>
      </section>
    </main>
  );
}
