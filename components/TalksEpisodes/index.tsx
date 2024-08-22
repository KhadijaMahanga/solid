import EpisodeItem from "@/components/TalksEpisodes/Episode";
import episodesList from "@/components/TalksEpisodes/data";
import SectionTitle from "@/components/SectionTitle";

const TalksEpisodes = () => {
  return (
    <section className="overflow-hidden">
      <div className="container py-8 md:py-16">
      <SectionTitle
          title="All Episodes"
          paragraph=""
        />
        <div className="py-4 flex flex-wrap">
            {episodesList.map((episode, index) => 
                <div key={index} className="w-full lg:w-10/12">
                    <EpisodeItem {...episode} />
                </div>
             )}
        </div>
      </div>
    </section>
  );
};

export default TalksEpisodes;