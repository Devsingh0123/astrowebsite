const Disclaimer = () => {
  return (
    <div className="text-black text-xs text-center py-2 px-4 border-t">
      {" "}
      Astrology services on{" "}
      <a
        href="https://www.astrotring.com"
        className="underline hover:text-primary"
      >
        www.astrotring.com
      </a>{" "}
      are provided for guidance and entertainment purposes only. Results may
      vary. Please read our full{" "}
      <a
        href="/disclaimer"
        className="underline font-medium hover:text-primary"
      >
        Disclaimer
      </a>{" "}
      before using the website.
    </div>
  );
};

export default Disclaimer;
