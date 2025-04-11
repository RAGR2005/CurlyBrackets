import React from 'react';
import { motion } from 'framer-motion';

const AchievementCard = ({ title, emoji, description, isLocked, progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`p-6 rounded-xl bg-base-100 relative overflow-hidden ${isLocked ? 'opacity-75' : ''}`}

    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-1 bg-base-200 w-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-full ${isLocked ? 'bg-error/30' : 'bg-primary'}`}
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-4xl">{emoji}</span>
          {isLocked && (
            <span className="text-error text-sm font-medium px-3 py-1 rounded-full bg-error/10">
              Locked
            </span>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-base-content/70 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors
            ${isLocked 
              ? 'bg-base-200 text-base-content/50 cursor-not-allowed' 
              : 'bg-primary text-primary-content hover:bg-primary/90'}`}
        >
          {isLocked ? '🔒 Locked' : 'View Progress'}
        </motion.button>
      </div>
    </motion.div>
  );
};

function Achievements() {
  const achievements = [
    {
      title: 'Hatchling',
      emoji: '🪽',
      description: 'Every legend starts as a Hatchling! Begin your journey into web development by watching lectures, practicing coding challenges, and building small projects.',
      isLocked: false,
      progress: 65
    },
    {
      title: 'Phoenix',
      emoji: '🔥',
      description: 'Rise from the ashes and master frameworks! Unlocks after completing HTML & CSS.',
      isLocked: true,
      progress: 20
    },
    {
      title: 'Dragon',
      emoji: '🐉',
      description: 'Harness the power of the Dragon! Unlocks after learning JavaScript & basic backend development.',
      isLocked: true,
      progress: 0
    },
    {
      title: 'Titan',
      emoji: '⚡',
      description: 'Transcend to Titan status with advanced frameworks & APIs! Unlocks after learning React, APIs, and advanced web concepts.',
      isLocked: true,
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-base-200 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">Your Achievements</h1>
          <p className="text-base-content/60">Track your progress and unlock new milestones</p>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-base-100 rounded-xl p-6 mb-12 flex items-center justify-between"
        >
          <div className="space-y-1">
            <h2 className="font-semibold">Overall Progress</h2>
            <p className="text-base-content/60 text-sm">Keep going! You're doing great!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-48 h-2 bg-base-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-primary"
              />
            </div>
            <span className="text-sm font-medium">20%</span>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <AchievementCard {...achievement} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;