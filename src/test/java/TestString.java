import com.google.common.collect.Maps;
import org.junit.Test;

import java.util.Map;

/**
 * Created by alex on 17-6-3.
 */
public class TestString {
    @Test
    public void test() {
        int runtimes = 100000000;

        long startTime, endTime;

        Map map = Maps.newHashMap();

        map.put("what", "fuck");

        startTime = System.currentTimeMillis();
        for (int i = 0; i < runtimes; i++) {
            String ooxx = (String) map.get("what");
        }
        endTime = System.currentTimeMillis();
        System.out.println("使用强制类型转换: " + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        for (int i = 0; i < runtimes; i++) {
            String ooxx = String.valueOf(map.get("what"));
        }
        endTime = System.currentTimeMillis();
        System.out.println("使用valueOf转换: " + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        for (int i = 0; i < runtimes; i++) {
            String ooxx = map.get("what").toString();
        }
        endTime = System.currentTimeMillis();
        System.out.println("使用toString转换: " + (endTime - startTime) + "ms");
    }
}
