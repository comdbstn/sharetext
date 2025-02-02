import { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold mb-4">ShareText</h1>
                <textarea
                  className="w-full h-32 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="텍스트를 입력하세요..."
                />
                <button
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  onClick={() => {
                    // TODO: Implement sharing functionality
                    alert('공유 기능은 곧 구현될 예정입니다!')
                  }}
                >
                  공유하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 