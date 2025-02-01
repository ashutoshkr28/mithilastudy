export default function MithilaStudyPlatform() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mithila Study Platform
        </h1>
        
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <h2 className="text-2xl font-semibold mb-2">Interactive Courses</h2>
            <p className="text-gray-600">Learn with structured courses designed for deep understanding.</p>
          </div>
          
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <h2 className="text-2xl font-semibold mb-2">Live Sessions</h2>
            <p className="text-gray-600">Join live classes and interact with educators in real-time.</p>
          </div>
        </div>
        
        <div className="mt-8 w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Join Our Platform</h2>
          <div className="flex gap-2">
            <input type="text" placeholder="Enter your email" className="flex-1 border border-gray-300 px-3 py-2 rounded-lg" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>
    );
  }