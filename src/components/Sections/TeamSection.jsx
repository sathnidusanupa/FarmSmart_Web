import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "K.M.H.S. Sathnidu", role: "Developer", image: "/team/Sanupa.jpeg" },
  { name: "S.A.D.D. Dananji", role: "Developer", image: "/team/Dileesha.jpeg" },
  { name: "I.S. Wimalaweera", role: "Developer", image: "/team/Sandil.jpeg" },
  { name: "N.H.P.M. Chamalka", role: "Developer", image: "/team/Malshi.jpeg" },
  { name: "M.H. Isali Dehansa", role: "Developer", image: "/team/Isali.jpeg" },
  { name: "W.D.T.T. Abraham", role: "Developer", image: "/team/theven.jpeg" }
];

const TeamSection = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="py-24 md:py-32 relative border-t border-white/5 bg-dark-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Meet the <span className="text-farm-green-400">Developing Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            The dedicated minds behind FarmSmart, working to empower Sri Lankan agriculture.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx} 
              variants={item} 
              className="glass-panel rounded-3xl p-6 text-center group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full border border-farm-green-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-farm-green-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-slate-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
