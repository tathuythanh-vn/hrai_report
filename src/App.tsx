import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Area, AreaChart } from 'recharts';
import { Users, Briefcase, Target, TrendingUp, Brain, Calendar, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import './App.css'

const HRAIReportsDashboard = () => {
  const [activeReport, setActiveReport] = useState('overview');

  // Sample data for Resource Overview
  const headcountData = [
    { location: 'Singapore', count: 145, util: 82 },
    { location: 'India', count: 320, util: 78 },
    { location: 'Germany', count: 89, util: 85 },
    { location: 'USA', count: 156, util: 80 },
    { location: 'Japan', count: 67, util: 75 }
  ];

  const skillDistribution = [
    { skill: 'UI5', count: 145, demand: 'High' },
    { skill: 'ABAP', count: 234, demand: 'Medium' },
    { skill: 'CAP', count: 98, demand: 'High' },
    { skill: 'Fiori', count: 167, demand: 'High' },
    { skill: 'BTP', count: 89, demand: 'Very High' },
    { skill: 'HANA', count: 201, demand: 'Medium' }
  ];

  const availabilityData = [
    { name: 'Fully Booked', value: 62, color: '#10b981' },
    { name: 'Partially Available', value: 23, color: '#f59e0b' },
    { name: 'Available', value: 12, color: '#3b82f6' },
    { name: 'On Leave', value: 3, color: '#ef4444' }
  ];

  // Project & Allocation Data
  const projectStaffing = [
    { project: 'S/4HANA Migration', staffed: 85, required: 100, match: 92 },
    { project: 'BTP Integration', staffed: 100, required: 100, match: 88 },
    { project: 'Fiori Redesign', staffed: 70, required: 90, match: 85 },
    { project: 'AI Chatbot', staffed: 90, required: 80, match: 95 },
    { project: 'Data Analytics', staffed: 60, required: 100, match: 78 }
  ];

  const allocationTrend = [
    { month: 'Aug', allocated: 65, available: 35 },
    { month: 'Sep', allocated: 72, available: 28 },
    { month: 'Oct', allocated: 78, available: 22 },
    { month: 'Nov', allocated: 82, available: 18 },
    { month: 'Dec', allocated: 79, available: 21 }
  ];

  // Skill Analytics Data
  const skillGrowth = [
    { skill: 'BTP', growth: 45, current: 89, gap: 23 },
    { skill: 'AI/ML', growth: 67, current: 34, gap: 45 },
    { skill: 'CAP', growth: 38, current: 98, gap: 12 },
    { skill: 'Cloud', growth: 52, current: 78, gap: 18 },
    { skill: 'DevOps', growth: 41, current: 56, gap: 28 }
  ];

  const skillRadarData = [
    { skill: 'Technical', A: 85, B: 70 },
    { skill: 'Leadership', A: 65, B: 80 },
    { skill: 'Communication', A: 78, B: 75 },
    { skill: 'Problem Solving', A: 88, B: 82 },
    { skill: 'Domain', A: 72, B: 85 }
  ];

  // Utilization Data
  const utilizationHeatmap = [
    { person: 'Team A', week1: 95, week2: 88, week3: 92, week4: 85 },
    { person: 'Team B', week1: 78, week2: 82, week3: 75, week4: 80 },
    { person: 'Team C', week1: 65, week2: 70, week3: 68, week4: 72 },
    { person: 'Team D', week1: 92, week2: 95, week3: 98, week4: 90 }
  ];

  const burnoutRisk = [
    { name: 'Low Risk', value: 68, color: '#10b981' },
    { name: 'Medium Risk', value: 24, color: '#f59e0b' },
    { name: 'High Risk', value: 8, color: '#ef4444' }
  ];

  // AI Predictions Data
  const predictedShortage = [
    { skill: 'BTP Architects', current: 12, needed: 25, timeline: '3 months' },
    { skill: 'AI Specialists', current: 8, needed: 20, timeline: '2 months' },
    { skill: 'Cloud Engineers', current: 34, needed: 50, timeline: '4 months' },
    { skill: 'Security Experts', current: 15, needed: 28, timeline: '3 months' }
  ];

  const aiAccuracy = [
    { month: 'Jul', accuracy: 72 },
    { month: 'Aug', accuracy: 78 },
    { month: 'Sep', accuracy: 82 },
    { month: 'Oct', accuracy: 85 },
    { month: 'Nov', accuracy: 88 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const MetricCard = ({ title, value, subtitle, icon: Icon, trend, color = 'blue' }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2" style={{ color }}>{value}</p>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className="p-3 rounded-full bg-gray-100">
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-green-600 font-medium">{trend}</span>
        </div>
      )}
    </div>
  );

  const reportCategories = [
    { id: 'overview', name: 'Resource Overview', icon: Users },
    { id: 'projects', name: 'Project & Allocation', icon: Briefcase },
    { id: 'skills', name: 'Skill Analytics', icon: Target },
    { id: 'utilization', name: 'Performance & Utilization', icon: TrendingUp },
    { id: 'ai', name: 'AI Insights & Predictions', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">HRAI Reporting Dashboard</h1>
        <p className="text-blue-100 mt-1">Comprehensive Resource & AI Analytics Platform</p>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto">
            {reportCategories.map(cat => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveReport(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeReport === cat.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        
        {/* 1. Resource Overview Reports */}
        {activeReport === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricCard
                title="Total Active Resources"
                value="777"
                subtitle="Across 5 locations"
                icon={Users}
                trend="+12% from last quarter"
                color="#3b82f6"
              />
              <MetricCard
                title="Fully Utilized"
                value="62%"
                subtitle="482 employees"
                icon={CheckCircle}
                trend="+5% this month"
                color="#10b981"
              />
              <MetricCard
                title="Underutilized"
                value="12%"
                subtitle="93 employees"
                icon={Clock}
                color="#f59e0b"
              />
              <MetricCard
                title="Avg Skill Rating"
                value="4.2/5"
                subtitle="All regions"
                icon={Target}
                trend="+0.3 improvement"
                color="#8b5cf6"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Headcount by Location & Utilization
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={headcountData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="location" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="count" fill="#3b82f6" name="Headcount" />
                    <Bar yAxisId="right" dataKey="util" fill="#10b981" name="Utilization %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Employee Availability Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={availabilityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {availabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Skill Set Distribution Across Organization
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={skillDistribution} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="skill" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8b5cf6" name="Employee Count" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* 2. Project & Allocation Reports */}
        {activeReport === 'projects' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="Staff Coverage Ratio"
                value="78%"
                subtitle="Average across projects"
                icon={Briefcase}
                color="#3b82f6"
              />
              <MetricCard
                title="Avg Allocation Duration"
                value="4.2 months"
                subtitle="Per project"
                icon={Calendar}
                color="#10b981"
              />
              <MetricCard
                title="Cross-Location Projects"
                value="34%"
                subtitle="Multi-site collaboration"
                icon={Users}
                trend="+8% growth"
                color="#f59e0b"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                Project Staffing Status & AI Match Quality
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={projectStaffing}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="project" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="staffed" fill="#10b981" name="Staffed %" />
                  <Bar yAxisId="left" dataKey="required" fill="#e5e7eb" name="Required %" />
                  <Bar yAxisId="right" dataKey="match" fill="#8b5cf6" name="AI Match Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Historical Allocation Trend (Last 5 Months)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={allocationTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="allocated" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Allocated %" />
                  <Area type="monotone" dataKey="available" stackId="1" stroke="#10b981" fill="#10b981" name="Available %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* 3. Skill Analytics Reports */}
        {activeReport === 'skills' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="Skill Growth Rate"
                value="+42%"
                subtitle="Emerging skills (6 months)"
                icon={TrendingUp}
                color="#10b981"
              />
              <MetricCard
                title="Skill Diversity Index"
                value="7.8/10"
                subtitle="Cross-functional coverage"
                icon={Target}
                color="#8b5cf6"
              />
              <MetricCard
                title="High Demand Gap"
                value="23%"
                subtitle="Skills needed but unavailable"
                icon={AlertCircle}
                color="#ef4444"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Emerging Skills Growth & Demand Gap
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={skillGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="skill" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="growth" fill="#10b981" name="Growth Rate %" />
                    <Bar dataKey="gap" fill="#ef4444" name="Demand Gap %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Skill Strength Comparison (Team A vs B)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={skillRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis />
                    <Radar name="Team A" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Radar name="Team B" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Top Skills: Current Count vs Future Demand
              </h3>
              <div className="space-y-3">
                {skillGrowth.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex-1">
                      <p className="font-medium">{skill.skill}</p>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>Current: {skill.current}</span>
                        <span>Growth: <span className="text-green-600 font-medium">+{skill.growth}%</span></span>
                        <span>Gap: <span className="text-red-600 font-medium">{skill.gap}%</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. Performance & Utilization Reports */}
        {activeReport === 'utilization' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="Avg Utilization"
                value="80%"
                subtitle="Across all departments"
                icon={TrendingUp}
                color="#3b82f6"
              />
              <MetricCard
                title="Avg Project Duration"
                value="5.3 months"
                subtitle="Per employee assignment"
                icon={Calendar}
                color="#10b981"
              />
              <MetricCard
                title="Avg Idle Days"
                value="8.2 days"
                subtitle="Per quarter"
                icon={Clock}
                color="#f59e0b"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Team Utilization Heatmap (Last 4 Weeks)
                </h3>
                <div className="space-y-3">
                  {utilizationHeatmap.map((team, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-24 text-sm font-medium">{team.person}</div>
                      <div className="flex-1 grid grid-cols-4 gap-2">
                        {['week1', 'week2', 'week3', 'week4'].map((week, i) => (
                          <div
                            key={i}
                            className="h-12 rounded flex items-center justify-center text-white font-medium text-sm"
                            style={{
                              backgroundColor: team[week] >= 90 ? '#ef4444' : team[week] >= 75 ? '#10b981' : team[week] >= 60 ? '#f59e0b' : '#94a3b8'
                            }}
                          >
                            {team[week]}%
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end space-x-4 mt-4 text-xs">
                  <div className="flex items-center"><div className="w-4 h-4 bg-red-500 rounded mr-1"></div> ≥90%</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded mr-1"></div> 75-89%</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-yellow-500 rounded mr-1"></div> 60-74%</div>
                  <div className="flex items-center"><div className="w-4 h-4 bg-gray-400 rounded mr-1"></div> &lt;60%</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Predicted Burnout Risk Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={burnoutRisk}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {burnoutRisk.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Cost of Underutilization Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Idle Hours (Monthly)</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">1,847 hrs</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600">Estimated Cost Impact</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">$184,700</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Optimization Potential</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">+15%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. AI Insights & Predictions */}
        {activeReport === 'ai' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricCard
                title="AI Prediction Accuracy"
                value="88%"
                subtitle="Current model performance"
                icon={Brain}
                trend="+6% improvement"
                color="#8b5cf6"
              />
              <MetricCard
                title="Avg Skill Gap Closure"
                value="2.8 months"
                subtitle="Time to fill needs"
                icon={Target}
                color="#10b981"
              />
              <MetricCard
                title="Match Success Rate"
                value="91%"
                subtitle="AI vs actual assignments"
                icon={CheckCircle}
                color="#3b82f6"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-600" />
                Predicted Resource Shortage by Skill & Location
              </h3>
              <div className="space-y-3">
                {predictedShortage.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-l-4 border-red-500">
                    <div>
                      <p className="font-semibold text-gray-900">{item.skill}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Current: <span className="font-medium">{item.current}</span> | 
                        Needed: <span className="font-medium text-red-600">{item.needed}</span> | 
                        Gap: <span className="font-bold text-red-700">{item.needed - item.current}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        {item.timeline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  AI Model Accuracy Trend (5 Months)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={aiAccuracy}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" stroke="#8b5cf6" strokeWidth={3} name="Accuracy %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-600" />
                  AI Recommendations Overview
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="font-medium text-blue-900">Immediate Hiring Priority</p>
                    <p className="text-sm text-blue-700 mt-1">BTP Architects - Recommend 8 hires within 60 days</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <p className="font-medium text-purple-900">Training Investment</p>
                    <p className="text-sm text-purple-700 mt-1">AI/ML upskilling for 15 developers - ROI: 340%</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="font-medium text-green-900">Resource Reallocation</p>
                    <p className="text-sm text-green-700 mt-1">Move 12 resources from Project B to C for optimal match</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <p className="font-medium text-orange-900">Burnout Prevention</p>
                    <p className="text-sm text-orange-700 mt-1">8 team members need workload reduction by 20%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Skill Trend Forecast (Next 6 Months)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={[
                  { month: 'Now', btp: 89, ai: 34, cloud: 78 },
                  { month: 'M+2', btp: 105, ai: 48, cloud: 92 },
                  { month: 'M+4', btp: 118, ai: 67, cloud: 108 },
                  { month: 'M+6', btp: 132, ai: 89, cloud: 125 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="btp" stroke="#3b82f6" strokeWidth={2} name="BTP Skills" />
                  <Line type="monotone" dataKey="ai" stroke="#8b5cf6" strokeWidth={2} name="AI/ML Skills" />
                  <Line type="monotone" dataKey="cloud" stroke="#10b981" strokeWidth={2} name="Cloud Skills" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HRAIReportsDashboard;