import axios from "axios";

export default {
  async getTotalPlugins() {
    const res = await axios.get(
      "https://gitee.com/monkeyWang/rubick-database/raw/master/plugins/total-plugins.json"
    );
    return res.data;
  },

  async getFinderDetail() {
    const res = await axios.get(
      "https://gitee.com/monkeyWang/rubick-database/raw/master/plugins/finder.json"
    );
    return res.data;
  },

  async getSystemDetail() {
    const res = await axios.get(
      "https://gitee.com/monkeyWang/rubick-database/raw/master/plugins/system.json"
    );
    return res.data;
  },
  async getWorkerDetail() {
    const res = await axios.get(
      "https://gitee.com/monkeyWang/rubick-database/raw/master/plugins/worker.json"
    );
    return res.data;
  },

  async getPluginDetail(url: string) {
    const res = await axios.get(url);
    return res.data;
  },
};
