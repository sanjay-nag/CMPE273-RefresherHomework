public class Multithreading {

    public static void main(String[] args) {

         int numberOfThreads = 4;

        for(int i = 0; i < numberOfThreads; i++) {
            MultithreadingAddition thread = new MultithreadingAddition();
            thread.start();
        }

    }

}