import chokidar from "chokidar";
import * as path from "path";
import { ChildProcess, execSync, spawn } from "child_process";

const graphql_folder_path = path.dirname(
  require.resolve("@abir-taheer/graphql"),
);
const typeDefsFolder = path.join(graphql_folder_path, "typeDefs");

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const ignored = (file: string) => {
  // no node modules
  if (file.includes("node_modules")) {
    return true;
  }

  // no generated files
  const generated_folder = path.join(graphql_folder_path, "generated");
  if (file.includes(generated_folder)) {
    return true;
  }

  // no js and dotfiles
  const filename = path.basename(file);
  if (filename.startsWith(".") || filename.endsWith(".js")) {
    return true;
  }

  return false;
};

const watcher = chokidar.watch(graphql_folder_path, {
  ignored,
  persistent: true,
});

let serverProcess: ChildProcess;

const spawnServer = async () => {
  if (serverProcess) {
    console.log("Restarting server...");
    let tries = 0;
    while (!serverProcess.killed && tries < 3) {
      serverProcess.kill();
      await sleep(1000);
    }

    if (!serverProcess.killed) {
      console.log("Failed to kill GraphQL server");
      return;
    }
  }

  serverProcess = spawn("ts-node", ["run"], { stdio: "inherit" });
  console.log("New GraphQL server with PID", serverProcess.pid);
};

let busy = false;
const onChange = async (path: string) => {
  if (busy) return;
  busy = true;

  if (path.includes(typeDefsFolder)) {
    execSync("yarn codegen", { stdio: "inherit" });
  }

  await spawnServer();
  busy = false;
};

watcher.on("ready", async () => {
  await spawnServer();

  watcher.on("add", onChange).on("change", onChange).on("unlink", onChange);
});
