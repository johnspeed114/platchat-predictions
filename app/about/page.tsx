import React from 'react';

export default function About() {
  return (
    <main className="flex justify-center items-center content-center flex-col">
      <section className="flex justify-center items-center flex-col max-w-6xl">
        <h1 className="my-5 font-bold text-4xl font-childshandwriting">
          About This Site
        </h1>
        <p className="mb-5">
          Welcome to the Valorant Visionaries' Predictions! My project is for
          the fans of VALORANT esports and PlatChat Valorant, showcasing
          prediction success rates of PlatChat members across major
          international tournaments. It's all about adding more fun to the
          esports experience!
        </p>
        <section>
          {/* [TO DO] Add sources links and their link below. 
        Maybe also add my google sheets(read ONLY) to this  */}
          <h2 className="font-bold text-lg text-center">
            Data Sources and Types
          </h2>
          <p className="mb-5">
            I've analyzed PlatChat VALORANT podcast predictions for
            international tournaments (2021-2023). This includes success rates,
            total matches predicted, and correct predictions for each member and
            the group. The data focuses on key tournaments, offering insights
            into the prediction accuracy of PlatChat members. Check out the
            sources and detailed findings here:
            <ul className='underline text-blue-500 '>
              <li>
                <a href="https://www.youtube.com/@PlatChatVALORANT">
                  PlatChat VALORANT Podcast
                </a>
              </li>
              <li>
                <a href="https://liquipedia.net/valorant">Liquipedia Valorant</a>
              </li>
              <li>
                <a href="https://www.rib.gg/">Rib.gg</a>
              </li>
            </ul>
          </p>
        </section>
        <section>
          {/* [TO DO ] Also, add the explaination to the actual calculations for the success rate. */}
          <h2 className="font-bold text-l text-center">Methodologies</h2>
          <p className="mb-5">
            The methodology involves recording PlatChat member predictions from
            each podcast episode before tournaments. If the individuals made the
            predictions with no group predictions, group prediction would be the
            major predcition. Success rates are calculated by comparing
            predictions with actual match results, then treating all instances
            as the same weighted average. For individual predictions, the
            majority prediction was considered as the group's prediction. While
            efforts were made for accuracy, limitations include the exclusion of
            map-specific predictions and unavailability of playoff series data.
            Limitation details more below.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">Limitations and Considerations</h2>
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
            jojomojojo194@gmail.com Additionally, there are some tournament
            formats, due to unexpected circumstances, reformated after the
            PlatChat predictions. <br/><b>[Specific Case: 2021 Masters Berlin] </b>
            An interesting case was the 2021 Masters Berlin, where one team
            couldn’t participate. For the affected group, which included teams
            like Sentinels, F4Q, and G2, I adjusted my approach. I did not count
            these matches in the prediction for simplicity sake. Other events
            with same treatment include VCT Stage 3 Masters Reykjavik and VCT
            Stage 3 Masters 2023.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-center">Future Direction</h2>
          <p className="mb-5">
            I am looking to refine my methodology and expand the
            scope of my analysis. Feedback and suggestions from the community
            are always welcome. Future updates may include more regional matches
            and interactive data visualizations.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-lg text-center">Contact and Credits</h2>
          <p className="mb-5">
            For inquiries or feedback, please reach out to me at:<a href="mailto:jojomojojo194@gmail.com" className='text-blue-400'>
    <strong> jojomojojo194@gmail.com</strong>
  </a>.
             Special thanks to the PlatChat for being a
            key source of the predictions data and to the VALORANT community for
            their enthusiasm and support.
          </p>
        </section>
      </section>
    </main>
  );
}
