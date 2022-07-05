#include <string>
#include <thread>
#include <future>
#include <iostream>
#include <vector>

#include <emscripten/bind.h>
using namespace emscripten ;


std::vector<int> s = {40000, 40000, 40000, 40000} ;

void longCompute() {
    std::cout << "countdown:\n";
    for (int i = 10; i > 0; --i)
    {
        std::cout << i << std::endl;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
    std::cout << "Lift off!\n";
}

void run_thread() {
    std::cout << "Using std::thread" << std::endl ;
    std::vector<std::thread> threads ;
    for (int i = 0; i < s.size(); i++) {
        threads.push_back( std::thread(longCompute) ) ;
    }
    std::cerr << "start threads"<< std::endl ;
    for (auto &th : threads) {
        th.join() ;
    }
    std::cerr << "end threads"<< std::endl ;
}

void run_non_thread() {
    longCompute();
}

void isitup() {
    std::cout << "si" << std::endl;
}

// ------------------------------
// Only expose 2 functions in js
// ------------------------------
EMSCRIPTEN_BINDINGS(test) {
    function("isitup", &isitup);
    function("run_thread", &run_thread);
    function("run_non_thread", &run_non_thread);
}
