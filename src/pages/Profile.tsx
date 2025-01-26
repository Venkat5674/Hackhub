import { motion } from 'framer-motion';
import { Award, Calendar, Code2, Github, Linkedin, Mail, MapPin, Trophy, User } from 'lucide-react';
import { useState } from 'react';

type Achievement = {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'winner' | 'participant';
};

type Skill = {
  name: string;
  level: number;
};

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'AI Innovation Hackathon',
      date: '2024-02-15',
      description: 'First place winner with an AI-powered healthcare solution',
      type: 'winner',
    },
    {
      id: 2,
      title: 'Web3 Development Challenge',
      date: '2024-01-20',
      description: 'Built a decentralized marketplace for digital artists',
      type: 'participant',
    },
  ];

  const skills: Skill[] = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500" />
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="-mt-16 relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800" />
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left flex-1">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Developer</h1>
                <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center sm:justify-start mt-1">
                  <User className="h-4 w-4 mr-1" />
                  Full Stack Developer
                </p>
                <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center sm:justify-start mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  San Francisco, CA
                </p>
                <div className="mt-4 flex items-center justify-center sm:justify-start space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-4 sm:mt-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <Code2 className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
            Skills
          </h2>
          <div className="mt-4 space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
            Achievements
          </h2>
          <div className="mt-4 space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  {achievement.type === 'winner' ? (
                    <Award className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <Calendar className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(achievement.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}