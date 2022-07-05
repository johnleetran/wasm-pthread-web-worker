#include <string>
#include <thread>
#include <future>
#include <iostream>
#include <vector>

#include <emscripten/bind.h>
using namespace emscripten ;


std::vector<int> s = {40000, 40000, 40000, 40000} ;

void longCompute(int id, int iterations) {
    double val = 0 ;
    for (int i=0; i<10000; ++i) {
        for (int j=0; j<iterations; ++j) {
            val += 3.1415 ;
        }
    }
    std::cout << "thread " << (id) << ": " << val << std::endl ;
}

void testThread() {
    std::cout << "Using std::thread" << std::endl ;
    std::vector<std::thread> threads ;
    for (int i = 0; i < s.size(); i++) {
        threads.push_back( std::thread(longCompute, i, s[i]) ) ;
    }
    std::cerr << "start threads"<< std::endl ;
    for (auto &th : threads) {
        th.join() ;
    }
    std::cerr << "end threads"<< std::endl ;
}

void testSerial() {
    std::cout << "Using serial" << std::endl ;
    for (int i = 0; i < s.size(); i++) {
        longCompute(i, s[i]) ;
    }
    std::cerr << "end serial"<< std::endl ;
}

// ------------------------------
// Only expose 2 functions in js
// ------------------------------
EMSCRIPTEN_BINDINGS(test) {
    function("thread", &testThread) ;
    function("serial", &testSerial) ;
}
