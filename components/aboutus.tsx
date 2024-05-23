import React from 'react';
import Member from './member';
import memberList from '../constants/dummy/member.json';

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We are Manufactor - a software development agency</strong> We
          are founders and doers first and our approach to building products is
          different than a big corporation. We like to dive into areas by
          understanding your problem and iterating on solutions like we would
          with our own startup. We like to get our hands dirty and do whatever
          is needed to actually ship
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2 className="font-bold">Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          {memberList?.map((member, index) => (
            <Member
              key={index}
              id={member.id}
              name={member.name}
              socialId={member.socialId}
              link={member.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
