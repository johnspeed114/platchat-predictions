'use client';
import React from 'react';

export default function About() {
  return (
    <main className="flex justify-center items-center content-center flex-col">
      <section className="flex justify-center items-center flex-col max-w-6xl px-4">
        <h1 className="my-5 font-bold text-3xl sm:text-4xl font-childshandwriting">
          About This Site
        </h1>
        <p className="mb-5">
          Welcome to the Valorant Visionaries' Predictions! My project is for
          the fans of VALORANT esports and PlatChat Valorant, showcasing
          prediction success rates of PlatChat members across major
          international tournaments. It's all about adding more fun to the
          esports experience! FYI, since I don't have many of the PlatChat
          members' data individually, I apologies Avast for your horrible
          success rate. The most data I have is the group's, Sliggy's, and
          Thinking Man Valorant's. Hence, why their predictons are more
          accurate. Rest of you, I need you to do more pickems individual
          plz!Especially you Avast!
        </p>
        <section>
          {/* [TO DO]  
        Maybe also add my google sheets(read ONLY) to this and !!!ALL NEEDS TO BE GRAMMATICALLY CHECKED AGAIN THRU CHATGPT */}
          <h2 className="font-bold text-lg text-center">
            Data Sources and Types
          </h2>
          <p className="mb-5">
            A big shout out to <b>Rib.gg</b> for providing all my VCT data for
            my spreadsheets. If it weren't for them, I would have to manually
            enter all that data for hours more. Check out their website for more
            VALORANT esports data below. I focused on PlatChat VALORANT members'
            predictions for only VCT international tournaments (2021-2023). This
            includes success rates, total matches predicted, and correct
            predictions for each member and the group. This is due to simplicity
            sake for viewers and me. Check out the sources and detailed findings
            here:
            <ul className="underline text-blue-500 ">
              <li>
                <a href="https://www.youtube.com/@PlatChatVALORANT">
                  PlatChat VALORANT Podcast
                </a>
              </li>
              <li>
                <a href="https://www.rib.gg/">Rib.gg</a>
              </li>
              <li>
                <a href="https://liquipedia.net/valorant">
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
            The methodology involves manually data entrying PlatChat members'
            predictions from each podcast pickem episode. If the individuals
            made the predictions with no group predictions, group prediction
            would be the
            <b>
              {' '}
              major prediction among the members during that PlatChat episode
            </b>
            . Success rates are calculated by comparing predictions with actual
            match results, then treating all instances as the same weighted
            average. To visually represent the success rates, smiling faces
            indicate a success rate above or equal to 50%, while sad faces are
            used for rates below 50%. While I made some efforts for accuracy,
            this prediction again is just simply for fun. There are also a lot
            limitations and lack of data. These include the exclusion of
            map-specific predictions and unavailability of playoff series data.
            I hope eventually either community or PlatChat can provide me with
            more data. Limitation details more below.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">
            Limitations and Considerations
          </h2>
          {/* [TO DO] find and look at my design drawing for limitation info */}
          <p className="mb-5">
            While efforts were made for accuracy, limitations include the
            exclusion of map-specific predictions and unavailability of playoff
            series data. These predictions as they go deeper into the
            tournament, especially playoffs if the predictions made incorrectly
            in the beginning deviates more and more. For simplicity and fun, I
            still compared and weighed the later matches same to the rest. My
            data doesn’t include many of playoff series due to PlatChat not
            avaliable to make those predictions. If you have additional data or
            found innaccuracies in my data, please reach out to me at
            jojomojojo194@gmail.com. There a specific case which I had to omit
            or change from the predictions please check below.
            <br />
            <b className="underline">Specific Cases</b>
            <br />
            <b>[VCT 2021 Masters Berlin - Group D]: </b>
            An interesting case was the 2021 Masters Berlin, where one team
            couldn’t participate. For the affected group, which included teams
            like Sentinels, F4Q, and G2, I adjusted my approach. I did not count
            these matches in the prediction for simplicity sake. Other events
            with same treatment include VCT Stage 3 Masters Reykjavik and VCT
            Stage 3 Masters 2023.
            <br />
            <b>[VCT 2022 Masters Reykjavik - Lower Bracket Final]: </b>Among the
            PlatChat members, I had to make a decision on how to handle the
            lower bracket final as it was a tie between Paper Rex and ZETA
            Division. Due to my geneorsity, I gave the group to ZETA Division.
            😊
            {/* [TO DO] add the missing data points (noticable ones like the group preds) like mention them right above */}
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-center">Future Direction</h2>
          <p className="mb-5">
            I am looking to refine my methodology and expand the scope of my
            analysis. Feedback and suggestions from the community are always
            welcome. Future updates may include more regional matches and
            interactive data visualizations.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">Contact and Credits</h2>
          <p className="mb-5">
            For inquiries or feedback, please reach out to me at:
            <a href="mailto:jojomojojo194@gmail.com" className="text-blue-400">
              <strong> jojomojojo194@gmail.com</strong>
            </a>
            . Special thanks to the PlatChat for being a key source of the
            predictions data and to the VALORANT community for their enthusiasm
            and support.
          </p>
        </section>
      </section>
    </main>
  );
}
